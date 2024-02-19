import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
    const classes = '"w-full p-1 border-b-2 rounded0-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"'

  // collect all other props passed in
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {/* spread remaining props on text area or input */}
      {textarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
    </p>
  );
});

export default Input;
