using caterapp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace caterapp.Repositories
{
    public interface IEventRepository
    {
        int Save(Event entity);
        int Update(Event entity);
        Event Get(int id);
        IEnumerable<Event> List();
    };

    public class EventRepository : IEventRepository
    {
        private CaterAppContext _appContext;
        public EventRepository(CaterAppContext appContext)
        {
            this._appContext = appContext;
        }

        public int Save(Event entity)
        {
            _appContext.Add(entity);
            _appContext.SaveChanges();
            return entity.Id;
        }

        public int Update(Event entity)
        {
            var existingRecord = _appContext.Events.SingleOrDefault(e => e.Id == entity.Id);
            existingRecord.Title = entity.Title;
            existingRecord.Start = entity.Start;
            existingRecord.End = entity.End;
            _appContext.SaveChanges();
            return entity.Id;
        }

        public IEnumerable<Event> List()
        {
            return _appContext.Events;
        }

        public Event Get(int id)
        {
            return _appContext.Events.SingleOrDefault(e => e.Id == id);
        }
    }
}
