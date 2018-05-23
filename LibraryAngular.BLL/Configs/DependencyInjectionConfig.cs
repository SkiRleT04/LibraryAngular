using LibraryAngular.BLL.Services;
using LibraryAngular.DAL.Repositories;
using LibraryAngular.DAL.Utils;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.BLL.Config
{
    public static class DependencyInjectionConfig
    {
        public static void InjectBusinessLogic(this IServiceCollection services)
        {
            services.AddTransient<AuthorRepository>();
            services.AddTransient<AuthorInBookRepository>();
            services.AddTransient<PublicHouseRepository>();
            services.AddTransient<PublicHouseInBookRepository>();
            services.AddTransient<MagazineRepository>();
            services.AddTransient<BrochureRepository>();
            services.AddTransient<BookRepository>();
            services.AddTransient<CommonLibraryRepository>();

            services.AddTransient<AuthorService>();
            services.AddTransient<BookService>();
            services.AddTransient<PublicHouseService>();
            services.AddTransient<BrochureService>();
            services.AddTransient<MagazineService>();
            services.AddTransient<CommonLibraryService>();

            services.AddTransient(typeof(QueryHelper<>));
        }
    }
}
