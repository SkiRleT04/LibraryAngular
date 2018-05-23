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
    public class MagazineRepository
    {
        private string _connectionString;
        private QueryHelper<Magazine> _queryHelper;

        public MagazineRepository(IConfiguration configuration, QueryHelper<Magazine> queryHepler)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _connectionString = connectionString;
            _queryHelper = queryHepler;
        }

        public async Task<IEnumerable<Magazine>> GetAll()
        {
            string query = _queryHelper.GenerateGetAllQuery();
            using (var db = new SqlConnection(_connectionString))
            {
                IEnumerable<Magazine> result = await db.QueryAsync<Magazine>(query);
                return result;
            }
        }

        public async Task<int> Create(Magazine item)
        {
            string query = _queryHelper.GenerateCreateQuery();
            using (var db = new SqlConnection(_connectionString))
            {
                int newRowId = await db.QuerySingleAsync<int>(query, item);
                return newRowId;
            }
        }

        public async Task Update(Magazine item)
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
