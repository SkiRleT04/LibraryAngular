using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.Entities
{
    public class PublicHouseInBook
    {
        public int Id { get; set; }
        public int PublicHouseId { get; set; }
        public int BookId { get; set; }

        public virtual Book Book { get; set; }
        public virtual PublicHouse PublicHouse { get; set; }
    }
}
