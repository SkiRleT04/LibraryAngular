﻿using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.Entities
{
    public class AuthorInBook
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public int BookId { get; set; }
        public virtual Author Author { get; set; }
        public virtual Book Book { get; set; }
    }
}
