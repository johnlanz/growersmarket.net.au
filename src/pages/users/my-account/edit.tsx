import Image from 'next/image';
import * as React from 'react';
import { getCustomer } from '@lib/customer/customers';
import Loading from '@components/customer/Loading';
import { updateCustomer } from '@lib/customer/updateCustomer';
import { GetUserToken } from '@lib/customer/login';
import router from 'next/router';
import { updateCustomerAddress } from '@lib/customer/updateCustomerAddress';

function Edit() {
  const [customer, setCustomer] = React.useState(null);
  const [showLoading, setShowLoading] = React.useState(false);
  const customerRef = React.useRef(null);
  const customerCallback = async () => {
    const customer = await getCustomer();
    console.log(customer);
    setCustomer(customer);
    customerRef.current.firstName.value = customer.firstName;
    customerRef.current.lastName.value = customer.lastName;
    customerRef.current.email.value = customer.email;
    customerRef.current.phone.value = customer.phone;

    customerRef.current.address1.value = customer.defaultAddress.address1;
    customerRef.current.address2.value = customer.defaultAddress.address2;
    customerRef.current.city.value = customer.defaultAddress.city;
    customerRef.current.provinceCode.value = customer.defaultAddress.provinceCode;
    customerRef.current.zip.value = customer.defaultAddress.zip;
  };
  React.useEffect(() => {
    customerCallback();
  }, []);

  const EditUserSubmit = async (event) => {
    event.preventDefault();
    setShowLoading(true)

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const address1 = event.target.address1.value;
    const address2 = event.target.address2.value;
    const city = event.target.city.value;
    const provinceCode = event.target.provinceCode.value;
    const zip = event.target.zip.value;

    const customerUpdate: any = await updateCustomer({
      customer: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
      }
    });

    const addressUpdate: any = await updateCustomerAddress({
      address: {
        address1: address1,
        address2: address2,
        city: city,
        province: provinceCode,
        zip: zip
      },
      id: customer.defaultAddress.id
    });

    console.log(customerUpdate);
    console.log(addressUpdate);

    if(customerUpdate.success) {
      //router.push('/users/my-account')
    } else {
      alert(customerUpdate.message)
    }

    if(addressUpdate.success) {
      //router.push('/users/my-account')
    } else {
      alert(addressUpdate.message)
    }

    console.log(firstName, lastName, email, phone);
    console.log(address1, address2, city, provinceCode, zip);
    setShowLoading(false)
  };
  return (
    <div className="flex justify-center items-center my-28 ">
      <Loading showLoading={showLoading} />
      <div className=" w-1/2">
        <div className="flex item-center ">
          <Image src="/login-icon.png" width={72} height={72} alt="" />
          <h2 className="p-4  font-bold text-4xl">My Account</h2>
        </div>
        <h2 className="mt-16 font-bold text-2xl">Personal Detail</h2>
        <form onSubmit={EditUserSubmit} ref={customerRef}>
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="First Name"
            name="firstName"
          />
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email"
            name="email"
          />

          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Phone Number"
            name="phone"
          />

          <h2 className="mt-16 font-bold text-2xl">Delivery Preference</h2>
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Address line 1"
            name="address1"
          />
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Address line 2"
            name="address2"
          />
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Suburb/Town"
            name="city"
          />

          <select
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            name="provinceCode"
          >
            <option>State</option>
            <option value="NSW">New South Wales</option>
            <option value="NT">Northern Territory</option>
            <option value="QLD">Queensland</option>
            <option value="SA">South Australia</option>
            <option value="TAS">Tasmania</option>
            <option value="Vic">Victoria</option>
            <option value="WA">Western Australia</option>
          </select>
          <input
            type="number"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Post Code"
            name="zip"
          />

          <div className="flex justify-end h-12 mt-6">
            <button
              type="submit"
              className="inline-block py-0 px-16 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
