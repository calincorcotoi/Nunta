namespace Server.Entities
{
    public class Guest
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public int NumberOfGuestComing { get; set; }
        public string? Description { get; set; }
    }
}
