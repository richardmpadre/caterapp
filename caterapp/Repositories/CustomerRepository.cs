using caterapp.Model;
using System.Collections.Generic;

namespace caterapp.Repositories
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> List();
    }

    public class CustomerRepository : ICustomerRepository
    {
        private CaterAppContext _appContext;
        public CustomerRepository(CaterAppContext appContext)
        {
            this._appContext = appContext;
        }

        public IEnumerable<Customer> List()
        {
            return this._appContext.Customers;
        }
    }
}
