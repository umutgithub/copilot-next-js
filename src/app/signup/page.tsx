import { InputField } from "@/components/InputField";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-zinc-900 border dark:border-zinc-800">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h1>
        <form className="space-y-4">
          <InputField
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your first name"
          />
          <InputField
            label="Last Name"
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Enter your last name"
          />
          <InputField
            label="Age"
            id="age"
            name="age"
            type="number"
            placeholder="Enter your age"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
