using Camping.Data.Utils;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


//modelBuilder.Configurations.Add(new <%=Name%>>_Mapping(_schemaProvider));
//public virtual DbSet<<%=Name%>> <%=Name%> { get; set; }
namespace Camping.Data.Mappings
{
    public class <%= Name %>_Mapping : EntityTypeConfiguration<<%= Name %>>
    {
        public <%= Name %>_Mapping(ISchemaProvider schemaProvider)
        {
            this.ToTable("<%= Name %>", schemaProvider.SchemaName);

            this.Property(e => e.Descripcion)
               .IsUnicode(false);
        }
    }
}
