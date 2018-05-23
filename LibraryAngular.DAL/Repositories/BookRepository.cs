using Dapper;
using LibraryAngular.DAL.Utils;
using LibraryAngular.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace LibraryAngular.DAL.Repositories
{
    public class BookRepository
    {
        private string _connectionString;
        private QueryHelper<Book> _queryHelper;

        public BookRepository(IConfiguration configuration, QueryHelper<Book> queryHelper)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _connectionString = connectionString;
            _queryHelper = queryHelper;
        }

        public async Task<int> Create(Book item)
        {
            string query = _queryHelper.GenerateCreateQuery();
            using (var db = new SqlConnection(_connectionString))
            {
                int newRowId = await db.QuerySingleAsync<int>(query, item);
                return newRowId;
            }
        }

        public async Task Update(Book item)
        {
            string query = _queryHelper.GenerateUpdateQuery();
            using (var db = new SqlConnection(_connectionString))
            {
                await db.ExecuteAsync(query, item);
            }
        }

        public async Task Delete(int id)
        {
            string query = _queryHelper.GenerateDeleteQuery();
            using (var db = new SqlConnection(_connectionString))
            {
                await db.ExecuteAsync(query, new { Id = id });
            }
        }
    }
}
