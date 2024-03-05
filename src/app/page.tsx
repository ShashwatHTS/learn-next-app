import axios from "axios";
import Link from "next/link";

export async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    console.log(9999999);
  }
}
export default async function Home() {
  const user = await getUserDetails();
  return (
    <>
    {/* {console.log(user.data)} */}
      <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
          <div className="border p-8 rounded">
            <div>Name: {user.data.username}</div>
            <div>Password: {user.data.password}</div>
          </div>
        </div>
        <button className="flex justify-center bg-blue-500 w-1/7 mx-auto text-white font-bold py-2 px-4 rounded"><Link href={"/signin"}>SingIn</Link></button>
      </div>
    </>
  );
}
