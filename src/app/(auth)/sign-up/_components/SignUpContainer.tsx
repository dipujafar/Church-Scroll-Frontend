import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const SignUpContainer = () => {
  return (
    <Card className="xl:w-[550px] md:w-[500px] shadow-md ">
      <CardHeader>
        <CardTitle className="text-center text-4xl font-semibold">
          Sign Up
        </CardTitle>
        <p className="text-center pt-4">Join our community today!</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-x-4">
          <Link href={`/create-account?role=Administrator`} className="flex-1">
            <Button
              variant={"outline"}
              className="w-full py-7 border-black text-black"
            >
              Church Administrator
            </Button>
          </Link>
          <Link href={`/create-account?role=user`} className="flex-1">
            <Button className="w-full py-7 bg-primary-blue hover:bg-primary-blue/90">
              User
            </Button>
          </Link>
        </div>
        {/* google sign in */}
        {/* <div className="relative mt-3">
            <Button className="w-full rounded-full" variant="outline">
              Continue with Google
            </Button>
            <Image src={google} alt="google" className="absolute left-2 top-1" />
          </div> */}
      </CardContent>

      {/* Footer with link to register */}
      <CardFooter className="flex justify-center gap-1">
        <p className="text-secondary-gray">Already have an account</p>
        <Link href={"/sing-in"}>
          <span className="text-lg text-green-600 font-medium"> Sign Up</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpContainer;
