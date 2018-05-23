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
    public class PublicHouseInBookRepository
    {

        private string _connectionString;

        public PublicHouseInBookRepository(IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<PublicHouseInBook>> GetAllPublicHouses()
        {
            var query = @"SELECT
                                phb.*,
		                        ph.*,
		                        b.*
                            FROM
                                PublicHouseInBooks phb
                            JOIN
                                Books b on phb.BookId = b.Id
                            RIGHT JOIN
                                PublicHouses ph on phb.PublicHouseId = ph.Id";

            using (var db = new SqlConnection(_connectionString))
            {
                IEnumerable<PublicHouseInBook> result = await db.QueryAsync<PublicHouseInBook, PublicHouse, Book, PublicHouseInBook>(query, (phb, ph, b) =>
                {
                    phb.PublicHouse = ph;
                    phb.Book = b;
                    return phb;
                });

                return result;
            }
        }

        public async Task<IEnumerable<PublicHouseInBook>> GetAllBooks()
        {
            var query = @"SELECT
                                phb.*,
		                        ph.*,
		                        b.*
                            FROM
                                PublicHouseInBooks phb
                            JOIN
                                PublicHouses ph on phb.PublicHouseId = ph.Id
                            RIGHT JOIN
                                Books b on phb.BookId = b.Id";

            using (var db = new SqlConnection(_connectionString))
            {
                IEnumerable<PublicHouseInBook> result = await db.QueryAsync<PublicHouseInBook, PublicHouse, Book, PublicHouseInBook>(query, (phb, ph, b) =>
                {
                    phb.PublicHouse = ph;
                    phb.Book = b;
                    return phb;
                });

                return result;
            }
        }

        public async Task AddBooksByPublicHouseId(int id, ICollection<Book> books)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                if (books != null && books.Count > 0)
                {
                    object[] listIds = books.Select(x => new { BookId = x.Id, PublicHouseId = id }).ToArray();
                    var query = $"INSERT INTO PublicHouseInBooks (BookId, PublicHouseId) values (@BookId, @PublicHouseId)";
                    await db.ExecuteAsync(query, listIds);
                }
            }
        }

        public async Task UpdateBooksByPublicHouseId(int id, ICollection<Book> books)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var query = $"DELETE FROM PublicHouseInBooks WHERE PublicHouseId = @Id";
                await db.ExecuteAsync(query, new { Id = id });

                if (books != null && books.Count > 0)
                {
                    object[] listIds = books.Select(x => new { BookId = x.Id, PublicHouseId = id }).ToArray();
                    query = $"INSERT INTO PublicHouseInBooks (BookId, PublicHouseId) values (@BookId, @PublicHouseId)";
                    await db.ExecuteAsync(query, listIds);
                }
            }
        }

        public async Task AddPublicHousesByBookId(int id, ICollection<PublicHouse> publicHouses)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                if (publicHouses != null && publicHouses.Count > 0)
                {
                    object[] listIds = publicHouses.Select(x => new { PublicHouseId = x.Id, BookId = id }).ToArray();
                    var query = $"INSERT INTO PublicHouseInBooks (BookId, PublicHouseId) values (@BookId, @PublicHouseId)";
                    await db.ExecuteAsync(query, listIds);
                }
            }
        }

        public async Task UpdatePublicHousesByBookId(int id, ICollection<PublicHouse> publicHouses)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var query = $"DELETE FROM PublicHouseInBooks WHERE BookId = @Id";
                await db.ExecuteAsync(query, new { Id = id });

                if (publicHouses != null && publicHouses.Count > 0)
                {
                    object[] listIds = publicHouses.Select(x => new { PublicHouseId = x.Id, BookId = id }).ToArray();
                    query = $"INSERT INTO PublicHouseInBooks (BookId, PublicHouseId) values (@BookId, @PublicHouseId)";
                    await db.ExecuteAsync(query, listIds);
                }
            }
        }

    }
}
