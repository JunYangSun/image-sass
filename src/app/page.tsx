import { Button } from "@/components/ui/button"
// import { Form  } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-xl flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create APP</h1>
        <Input name="name" placeholder="App Name"></Input>
        <Textarea name="description" placeholder="Description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
     </div>
  );
}
