namespace Camping.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using Utils;

    
    public partial class <%= Name %> : IClavePrimaria, ILogicDelete, IAuditCreation, IAuditUpdate
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public  <%= Name %>()
        {
            
        }

        public int Id { get; set; }

        [StringLength(255)]
        public string Descripcion { get; set; }

        

        public bool Deleted { get; set; }

        public string DeletedBy { get; set; }

        public DateTime? DeletedDate { get; set; }

        [StringLength(128)]
        public string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        [StringLength(128)]
        public string UpdatedBy { get; set; }

        public DateTime UpdatedDate { get; set; }

        // [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        // public virtual ICollection<Cliente> Cliente { get; set; }

        // public virtual FormaPago FormaPago { get; set; }
    }
}