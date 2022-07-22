function ListDetails(props) {
  return (
    <div class="flex items-center  shadow-lg p-1 w-60 rounded-2xl bg-slate-100 mb-4">
      <div>
        <img src={props.image} alt="img" class="w-16 h-16 rounded-full mr-4" />
      </div>
      <div class="text-lg">{props.name}</div>
    </div>
  );
}

export default ListDetails;
