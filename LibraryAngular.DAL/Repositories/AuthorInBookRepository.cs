using Dapper;
using LibraryAngular.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryAngular.DAL.Repositories
{
    public class AuthorInBookRepository
    {
        private string _connectionString;

        public AuthorInBookRepository(IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<AuthorInBook>> GetAllAuthors()
        {
            var query = @"SELECT
                                ab.*,
		                        a.*,
		                        b.*
                            FROM
                                AuthorInBooks ab
                            JOIN
                                Books b on ab.BookId = b.Id
                            RIGHT JOIN
                                Authors a on ab.AuthorId = a.Id";

            using (var db = new SqlConnection(_connectionString))
            {
                IEnumerable<AuthorInBook> result = await db.QueryAsync<AuthorInBook, Author, Book, AuthorInBook>(query, (ab, a, b) =>
                {
                    ab.Author = a;
                    ab.Book = b;
                    return ab;
                });

                return result;
            }
        }

        public async Task<IEnumerable<AuthorInBook>> GetAllBooks()
        {
            var query = @"SELECT
                                ab.*,
	                            a.*,
	                            b.*
                            FROM
                                AuthorInBooks ab
                            JOIN
                                Authors a on ab.AuthorId = a.Id
                            RIGHT JOIN
                                Books b on ab.BookId = b.Id";

            using (var db = new SqlConnection(_connectionString))
            {
                IEnumerable<AuthorInBook> result = await db.QueryAsync<AuthorInBook, Author, Book, AuthorInBook>(query, (ab, a, b) =>
                {
                    ab.Author = a;
                    ab.Book = b;
                    return ab;
                });

                return result;
            }
        }

        public async Task AddBooksByAuthorId(int id, ICollection<Book> books)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                if (books != null && books.Count > 0)
                {
                    object[] listBookAuthorsIds = books.Select(x => new { BookId = x.Id, AuthorId = id }).ToArray();
                    var query = $"INSERT INTO AuthorInBooks (BookId, AuthorId) values (@BookId, @AuthorId)";
                    await db.ExecuteAsync(query, listBookAuthorsIds);
                }
            }
        }

        public async Task UpdateBooksByAuthorId(int id, ICollection<Book> books)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var query = $"DELETE FROM AuthorInBooks WHERE AuthorId = @Id";
                await db.ExecuteAsync(query, new { Id = id });

                if (books != null && books.Count > 0)
                {
                    object[] listBookAuthorsIds = books.Select(x => new { BookId = x.Id, AuthorId = id }).ToArray();
                    query = $"INSERT INTO AuthorInBooks (BookId, AuthorId) values (@BookId, @AuthorId)";
                    await db.ExecuteAsync(query, listBookAuthorsIds);
                }
            }
        }

        public async Task AddAuthorsByBookId(int id, ICollection<Author> authors)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                if (authors != null && authors.Count > 0)
                {
                    object[] listBookAuthorsIds = authors.Select(x => new { BookId = id, AuthorId = x.Id }).ToArray();
                    var query = $"INSERT INTO AuthorInBooks (BookId, AuthorId) values (@BookId, @AuthorId)";
                    await db.ExecuteAsync(query, listBookAuthorsIds);
                }
            }
        }

        public async Task UpdateAuthorsByBookId(int id, ICollection<Author> authors)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var query = $"DELETE FROM AuthorInBooks WHERE BookId = @Id";
                await db.ExecuteAsync(query, new { Id = id });

                if (authors != null && authors.Count > 0)
                {
                    object[] listBookAuthorsIds = authors.Select(x => new { BookId = id, AuthorId = x.Id }).ToArray();
                    query = $"INSERT INTO AuthorInBooks (BookId, AuthorId) values (@BookId, @AuthorId)";
                    await db.ExecuteAsync(query, listBookAuthorsIds);
                }
            }
        }
    }

}
