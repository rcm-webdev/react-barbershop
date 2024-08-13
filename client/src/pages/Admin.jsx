import { useEffect, useState } from "react";

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:5000/api/bookings");
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="overflow-x-auto max-h-[500px] border rounded-lg">
        <table className="table table-pin-rows table-pin-cols">
          {/* head */}
          <thead>
            <tr>
              <th className="sticky top-0 bg-base-200 z-10">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="sticky top-0 bg-base-200 z-10">Name</th>
              <th className="sticky top-0 bg-base-200 z-10">Email</th>
              <th className="sticky top-0 bg-base-200 z-10">Date</th>
              <th className="sticky top-0 bg-base-200 z-10">Service</th>
              <th className="sticky top-0 bg-base-200 z-10">Barber</th>
              <th className="sticky top-0 bg-base-200 z-10"></th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {bookings.map((booking) => (
              <tr key={booking._id} className="bg-base-100">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={`https://ui-avatars.com/api/?name=${booking.name}&background=random`}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking.name}</div>
                    </div>
                  </div>
                </td>
                <td>{booking.email}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.service}</td>
                <td>{booking.barber}</td>
                <th>
                  <button className="btn btn-warning btn-xs">unpaid</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
