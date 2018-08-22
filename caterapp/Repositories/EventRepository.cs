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

        public IEnumerable<Event> List()
        {
            return _appContext.Events;
        }
    }
}
