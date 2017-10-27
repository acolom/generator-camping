namespace Camping.Model.Facturacion
{
    using Data;
    using Heroic.AutoMapper;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public partial class <%= Name %>Model : IMapFrom<<%= Name %>>
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public <%= Name %>Model()
        {
            //Cliente = new HashSet<Cliente>();
        }

        public int Id { get; set; }

        [StringLength(255)]
        public string Descripcion { get; set; }

    }
}
