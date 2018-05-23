using AutoMapper;
using LibraryAngular.BLL.Mappers;

namespace LibraryAngular.BLL.Config
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfiles(new[]
                {
                        typeof(AuthorMapperProfile),
                        typeof(BookMapperProfile),
                        typeof(PublicHouseMapperProfile),
                        typeof(BrochureMapperProfile),
                        typeof(AuthorMapperProfile),
                        typeof(CommonLibraryMapperProfile)
                    });
            });
        }
    }
}
