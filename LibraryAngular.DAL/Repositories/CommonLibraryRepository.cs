using Dapper;
using LibraryAngular.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using static Dapper.SqlMapper;

namespace LibraryAngular.DAL.Repositories
{
    public class CommonLibraryRepository
    {
        private string _connectionString;

        public CommonLibraryRepository(IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<CommonLibrary>> GetAll()
        {
            var query = @"SELECT Name, 'Book' as Type from Books;
                            SELECT Name, 'Brochure' as Type from Brochures;
                            SELECT Name, 'Magazine' as Type from Magazines;";

            using (var db = new SqlConnection(_connectionString))
            {

                var result = new List<CommonLibrary>();
                GridReader reader = await db.QueryMultipleAsync(query);

                int selectCount = Regex.Matches(query.ToUpper(), "SELECT").Count;

                for (int i = 0; i < selectCount; i++)
                {
                    IEnumerable<CommonLibrary> items = reader.Read<CommonLibrary>().ToList();
                    result.AddRange(items);
                }

                return result;
            }
        }
    }
}
