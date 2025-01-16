namespace Server.DTOs
{
    public class GuestDto
    {
        public required string Name { get; set; }
        public int NumberOfGuestComing { get; set; }
        public string? Description { get; set; }
    }
}
