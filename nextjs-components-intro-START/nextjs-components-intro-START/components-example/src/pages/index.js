// Importing the default component as Hello
import Hello from "../components/Hello";
import NewConcept from "@/components/NewConcept";
import ComponentWrapper from "@/components/ComponentWrapper";
import SimpsonsCharacters from "@/components/SimpsonsCharacters";

export default function Home() {
  // To insert this variable later down use {}
  let x = "How to import components";
  return (
    <div>
      <Hello />
      <ComponentWrapper color="green">
        <NewConcept concept="How to write Functional Components" />
        {/* Below we are using {} to insert js into our jsx */}
        <NewConcept concept={x} />
        <NewConcept concept="How to use props" />
      </ComponentWrapper>
      <ComponentWrapper color="red">
        <NewConcept concept="How to use lists of components" />
      </ComponentWrapper>
      <ComponentWrapper color="yellow">
        <p>This text is being wrapped</p>
      </ComponentWrapper>
      <ComponentWrapper color="#bc15c9">
        <SimpsonsCharacters />
      </ComponentWrapper>
    </div>
  );
}
