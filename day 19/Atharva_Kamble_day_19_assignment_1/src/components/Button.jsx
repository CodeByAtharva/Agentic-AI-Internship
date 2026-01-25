function Button({
  disabled = false,
  label,
  onClickHandler,
  size = "MEDIUM",
  type = "PRIMARY",
}) {
  const className = `btn btn-${size.toLowerCase()} btn-${type.toLowerCase()} ${
    disabled ? "btn-disabled" : ""
  }`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}

export default Button;
