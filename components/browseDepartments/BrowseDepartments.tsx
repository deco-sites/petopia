import { useId } from "preact/hooks";

export interface Departments {
  title: string;
  /** @default # */
  link?: string
}

export interface Props {
  title: string;
  description?: string;
  departments: Departments[];
}


const BrowseDepartments = (props: Props) => {
  const { title, description, departments } = props;
  return (
    <section id={useId()}>
      <div class="wrapper text-center flex flex-col gap-4 lg:gap-8">
        <h2 class="title">{title}</h2>

        {description && <p class="text-base	text-[#4F3C70]">{description}</p>}

        <div class="flex gap-1 items-stretch justify-center flex-wrap">
          {departments?.map((department) => {
            return <a href={department.link} class="py-3 px-6 cursor-pointer rounded-md bg-[#F7F3FE] font-medium	flex-wrap">{department.title}</a>;
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseDepartments;
