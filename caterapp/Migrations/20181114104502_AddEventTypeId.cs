using Microsoft.EntityFrameworkCore.Migrations;

namespace caterapp.Migrations
{
    public partial class AddEventTypeId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "EventTypes",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TypeId",
                table: "Events",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TypeId",
                table: "Events");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "EventTypes",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
