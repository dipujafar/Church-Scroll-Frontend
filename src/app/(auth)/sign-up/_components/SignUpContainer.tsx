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
    <Card className="xl:w-[550px] md:w-[500px] shadow-md w-full ">
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
          <Link href={`/church-member-info`} className="flex-1">
            <Button className="w-full py-7 bg-primary-blue hover:bg-primary-blue/90">
              Church Member
            </Button>
          </Link>
        </div>
      </CardContent>

      {/* Footer with link to register */}
      <CardFooter className="flex justify-center gap-1 truncate">
        <p className="text-secondary-gray">Already have an account?</p>
        <Link href={"/sign-in"}>
          <span className="text-lg text-green-600 font-medium"> Sign In</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpContainer;
