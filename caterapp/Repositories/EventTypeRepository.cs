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
        int Update(EventType entity);
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

        public int Update(EventType entity)
        {
            throw new NotImplementedException();
        }
    }
}
