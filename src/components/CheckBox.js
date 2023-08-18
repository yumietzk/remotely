function CheckBox({ label }) {
  return (
    <div className="flex items-center">
      <input
        className="mr-3 w-4 h-4 rounded text-black focus:ring-black focus:ring-1"
        type="checkbox"
      />
      <label>{label}</label>
    </div>
  );
}

export default CheckBox;
