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
      <div class="container text-center px-4 py-7 flex flex-col gap-8 lg:gap-10 md:px-0 lg:py-10">
        <h2 class="text-3xl	 font-semibold text-[#4f3c70]">{title}</h2>

        {description && <p class="text-base	text-[#4F3C70]">{description}</p>}

        <div class="flex gap-1 items-stretch justify-center flex-wrap">
          {departments?.map((department) => {
            return <a href={department.link} class="py-3 px-6 rounded-md bg-[#F7F3FE] font-medium	flex-wrap">{department.title}</a>;
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseDepartments;
