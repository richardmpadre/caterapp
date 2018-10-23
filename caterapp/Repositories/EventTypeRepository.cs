using caterapp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace caterapp.Repositories
{
    public interface IEventTypeRepository
    {
        int Create(EventType entity);
        void Update(EventType entity);
        EventType Get(int id);
        IEnumerable<EventType> List();
    };

    public class EventTypeRepository : IEventTypeRepository
    {
        private CaterAppContext _appContext;
        public EventTypeRepository(CaterAppContext appContext)
        {
            this._appContext = appContext;
        }

        public EventType Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<EventType> List()
        {
            return _appContext.EventTypes;
        }

        public int Create(EventType entity)
        {
            _appContext.EventTypes.Add(entity);
            _appContext.SaveChanges();
            return entity.Id;
        }

        public void Update(EventType entity)
        {
            var eventType = _appContext.EventTypes.SingleOrDefault(e => e.Id == entity.Id);
            if (eventType == null) throw new ArgumentException($"Event type with id : {entity.Id} not found");

            eventType.Name = entity.Name;
            _appContext.SaveChanges();
        }
    }
}
