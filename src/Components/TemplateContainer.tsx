import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const TemplateContainer = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Template 1</CardTitle>
          <CardDescription>Settings for template 1</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content</p>
        </CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card>
        <CardTitle>Template 2</CardTitle>
        <CardHeader>2</CardHeader>
      </Card>
      <Card>
        <CardTitle>Template 3</CardTitle>
        <CardHeader>3</CardHeader>
      </Card>
    </div>
  );
};

export default TemplateContainer;
