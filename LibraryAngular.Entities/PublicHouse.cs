using System.Collections.Generic;

namespace LibraryAngular.Entities
{
    public class PublicHouse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }

        public override bool Equals(object obj)
        {
            var house = obj as PublicHouse;
            return house != null &&
                   Id == house.Id;
        }

        public override int GetHashCode()
        {
            return 2108858624 + Id.GetHashCode();
        }
    }
}
