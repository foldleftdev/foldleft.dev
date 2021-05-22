/**
 * @param {object} props
 * @param {string|React.ReactNode} props.value
 */
export default function Spacer({
  value,
}) {
  return (
    <span style={{ marginLeft: '0.25em' }}>
      {value}
    </span>
  );
}
