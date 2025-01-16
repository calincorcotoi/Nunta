using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTOs;
using Server.Entities;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GuestsController(WeddingContext weddingContext) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GuestDto>>> GetAllGuests()
        {
            List<GuestDto> guestsDto = await weddingContext.Guests
                .Select(g => new GuestDto
                {
                    Name = g.Name,
                    NumberOfGuestComing = g.NumberOfGuestComing,
                    Description = g.Description
                })
                .ToListAsync();
            return Ok(guestsDto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Guest>> GetGuestById(int id)
        {
            Guest? guest = await weddingContext.Guests.FirstOrDefaultAsync(g => g.Id == id);
            if (guest == null)
            {
                return NotFound();
            }
            return Ok(guest);
        }

        [HttpPost]
        public async Task<ActionResult<Guest>> CreateGuest(GuestDto guestDto)
        {
            int maxId = await weddingContext.Guests.MaxAsync(g => (int?)g.Id) ?? 0;
            Guest guest = new Guest
            {
                Id = maxId + 1,
                Name = guestDto.Name,
                NumberOfGuestComing = guestDto.NumberOfGuestComing,
                Description = guestDto.Description
            };
            weddingContext.Guests.Add(guest);
            await weddingContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetGuestById), new { id = guest.Id }, guest);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateGuest(int id, Guest updatedGuest)
        {
            Guest? guest = await weddingContext.Guests.FirstOrDefaultAsync(g => g.Id == id);
            if (guest == null)
            {
                return NotFound();
            }
            guest.Name = updatedGuest.Name;
            await weddingContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteGuest(int id)
        {
            Guest? guest = await weddingContext.Guests.FirstOrDefaultAsync(g => g.Id == id);
            if (guest == null)
            {
                return NotFound();
            }
            weddingContext.Guests.Remove(guest);
            await weddingContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("total-number-of-guests-coming")]
        public async Task<ActionResult<int>> GetTotalNumberOfGuestsComing()
        {
            int totalNumberOfGuestsComing = await weddingContext.Guests.SumAsync(g => g.NumberOfGuestComing);
            return Ok(totalNumberOfGuestsComing);
        }
    }
}
