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
    public class BrochureRepository
    {
        private string _connectionString;
        private QueryHelper<Brochure> _queryHelper;

        public BrochureRepository(IConfiguration configuration, QueryHelper<Brochure> queryHelper)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _connectionString = connectionString;
            _queryHelper = queryHelper;
        }

        public async Task<IEnumerable<Brochure>> GetAll()
        {
            string query = _queryHelper.GenerateGetAllQuery();
            using (var db = new SqlConnection(_connectionString))
            {
                IEnumerable<Brochure> result = await db.QueryAsync<Brochure>(query);
                return result;
            }
        }

        public async Task<int> Create(Brochure item)
        {
            string query = _queryHelper.GenerateCreateQuery();
            using (var db = new SqlConnection(_connectionString))
            {
                int newRowId = await db.QuerySingleAsync<int>(query, item);
                return newRowId;
            }
        }

        public async Task Update(Brochure item)
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
