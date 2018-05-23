using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace LibraryAngular.DAL.Utils
{
    public class QueryHelper<T> where T : class
    {
        public string GenerateCreateQuery()
        {
            var query = $"INSERT INTO {typeof(T).Name}s ({GenerateProperies()}) OUTPUT INSERTED.Id VALUES ({GenerateSetValues()})";
            return query;
        }

        public string GenerateUpdateQuery()
        {
            var query = $"UPDATE {typeof(T).Name}s SET {GeneratePropertiesValues()} WHERE Id = @Id";
            return query;
        }

        public string GenerateGetAllQuery()
        {
            var query = $"SELECT * FROM {typeof(T).Name}s";
            return query;
        }


        public string GenerateDeleteQuery()
        {
            var query = $"DELETE FROM {typeof(T).Name}s WHERE Id = @Id";
            return query;
        }

        public string GenerateGetByIdQuery()
        {
            var query = $"SELECT * FROM {typeof(T).Name}s WHERE Id=@Id";
            return query;
        }

        private static string GeneratePropertiesValues()
        {
            IEnumerable<string> columns = GetColumns();
            var stringOfPropertiesValues = string.Join(", ", columns.Select(e => $"{e} = @{e}"));
            return stringOfPropertiesValues;
        }

        private static string GenerateSetValues()
        {
            IEnumerable<string> columns = GetColumns();
            var stringOfSetValues = string.Join(", ", columns.Select(e => $"@{e}"));
            return stringOfSetValues;
        }

        private static string GenerateProperies()
        {
            IEnumerable<string> columns = GetColumns();
            var stringOfProperties = string.Join(", ", columns);
            return stringOfProperties;
        }

        private static IEnumerable<string> GetColumns()
        {
            return typeof(T)
                    .GetProperties()
                    .Where(e => e.Name != "Id" && !e.PropertyType.GetTypeInfo().IsGenericType)
                    .Select(e => e.Name);
        }
    }
}
