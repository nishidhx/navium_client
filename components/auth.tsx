"use client";
import { cn } from "@/utils/clsx";
import Grainient from "./Grainient";
import { Bar } from "./chat/bar";
import { GoogleIcon } from "@/icons/GoogleIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { Field, FieldInput, FieldSelect } from "./[ui]/Field";
import { Button } from "./[ui]/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AuthStepBox = ({
  className,
  text,
  selected = false,
  step,
}: {
  className?: string;
  text?: string;
  selected?: boolean;
  step: number;
}) => {
  return (
    <div
      className={cn(
        "h-40 w-40 bg-gray-300/50 flex flex-col gap-5 p-4 bg-blend-difference rounded-3xl border border-white/50",
        selected ? "bg-white" : "hover:bg-white",
      )}
    >
      <div
        className={cn(
          "h-8 w-8 rounded-full p-2 flex items-center justify-center text-white",
          selected ? "bg-black" : "bg-black/50",
        )}
      >
        {step}
      </div>
      <div className="text-xl font-semibold text-black">
        <p>{text}</p>
      </div>
    </div>
  );
};

export const AuthPage = ({ type }: { type: string }) => {
  const router = useRouter()
  function handleUserFlow(type: number): void {
    const handleUserOAuthGoogle = async () => {
      window.location.href = "http://localhost:3001/api/v1/auth/google";

    };

    try {
      switch (type) {
        case 1:
          handleUserOAuthGoogle()
        default:
          throw new Error("Get the proper user flow type")
      }
    } catch (err) {
      throw new Error("Function not implemented.");
    }
  }

  return (
    <div className="w-screen h-screen flex flex-row bg-black p-8">
      <div className="w-full h-full relative">
        <Grainient
          className="rounded-md z-0"
          color1="#1ceba7"
          color2="#283c2c"
          color3="#879d86"
          timeSpeed={0.3}
          colorBalance={-0.06}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2.8}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={0}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
        <div className="absolute inset-0 flex px-20 py-10 items-end z-10 pointer-events-none">
          <div>
            <p className="font-extrabold mix-blend-difference  text-5xl leading-tight">
              Get Started <br /> with Navium
            </p>
            <div className="flex justify-center gap-4 mt-20 leading-tight">
              <AuthStepBox
                step={1}
                text="SignUp your account"
                selected={true}
              />
              <AuthStepBox step={2} text="Edit Your Profile" />
              <AuthStepBox step={3} text="Start Messaging" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-250 min-h-full flex flex-col justify-center items-center bg-[black]/20 p-20">
        <div className="flex flex-col gap-2 justify-center">
          <div>
            <p className="text-white text-4xl text-center font-semibold">
              {type === "1" ? "SignUp Your Account" : "SignIn Your Account"}
            </p>
          </div>
          <div>
            <p className="text-secondary text-center">
              Enter your personal details to create your account
            </p>
          </div>

          <div
            className="mt-10 flex justify-center gap-2"
            onClick={() => handleUserFlow(1)}
          >
            <Bar title="Google" icon={<GoogleIcon className="size-4" />} />
            <Bar
              title="Github"
              icon={<GithubIcon className="size-4 bg-white rounded-full" />}
            />
          </div>

          {/* or separator */}
          <div className="flex items-center w-full gap-4 mt-5">
            <div className="h-px flex-1 bg-gray-500/20" />
            <span className="text-sm text-gray-500 font-medium">OR</span>
            <div className="h-px flex-1 bg-gray-500/20" />
          </div>
        </div>

        {/* Field Inputs */}

        {type == "1" ? (
          <div className="flex flex-col mt-10 gap-2">
            <div className="flex gap-2">
              <Field text="First Name" className="">
                <FieldInput
                  placeholder="Enter your firstname"
                  type="text"
                  name="firstname"
                ></FieldInput>
              </Field>
              <Field text="Last Name" className="">
                <FieldInput
                  placeholder="Enter your lastname"
                  type="text"
                  name="firstname"
                ></FieldInput>
              </Field>
            </div>

            <Field text="Username">
              <FieldInput
                type="username"
                name="username"
                className="w-full"
                placeholder="Enter your username"
              ></FieldInput>
            </Field>

            <Field text="Email">
              <FieldInput
                type="email"
                name="email"
                className="w-full"
                placeholder="user_nav@gmail.com"
              ></FieldInput>
            </Field>

            <Field text="Password">
              <FieldInput
                type="password"
                name="password"
                className="w-full"
                placeholder="Enter your password"
              ></FieldInput>
            </Field>

            <div className="flex gap-2">
              <Field text="Phone">
                <FieldInput
                  type="phone"
                  name="email"
                  className="w-full"
                  placeholder="+1 (555) 123-4567"
                ></FieldInput>
              </Field>
              <Field text="Country">
                <FieldSelect className="w-full"></FieldSelect>
              </Field>
            </div>

            <Field text="Address">
              <FieldInput
                type="address"
                name="password"
                className="w-full"
                placeholder="Enter your local address"
              ></FieldInput>
            </Field>

            <Field className="flex gap-2">
              <Button
                type="submit"
                variant="outline"
                className="cursor-pointer"
              >
                Submit
              </Button>
              <Button type="button" className="cursor-pointer">
                Cancel
              </Button>
            </Field>
          </div>
        ) : (
          <div className="w-100 flex flex-col gap-2 mt-10">
            <Field text="Email">
              <FieldInput
                type="email"
                name="password"
                className="w-full"
                placeholder="Enter your email address"
              ></FieldInput>
            </Field>
            <Field text="Password">
              <FieldInput
                type="password"
                name="password"
                className="w-full"
                placeholder="Enter your email address"
              ></FieldInput>
            </Field>

            <Field className="flex gap-2">
              <Button
                type="submit"
                variant="outline"
                className="cursor-pointer"
              >
                Submit
              </Button>
              <Button type="button" className="cursor-pointer">
                Cancel
              </Button>
            </Field>
          </div>
        )}

        <div className="flex gap-2 mt-2">
          <p className="text-secondary">
            {type === "1"
              ? "Already have an account ?"
              : "Create your account ?"}{" "}
          </p>{" "}
          <Link
            className="text-white"
            href={type === "1" ? "/signin" : "/signup"}
          >
            {type === "1" ? "SignIn" : "SignUp"}
          </Link>
        </div>
      </div>
    </div>
  );
};
