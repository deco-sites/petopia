function onSERPLogo(
  { width = 80, height = 23, fill = "white", textClass = "" }: {
    width?: number;
    height?: number;
    fill?: string;
    textClass?: string;
  },
) {
  return (
    <div class="flex items-center text-sm">
      <span class={`${textClass} mr-2`}>Desenvolvido por: Web Wizards</span>
    </div>
  );
}

export default onSERPLogo;
