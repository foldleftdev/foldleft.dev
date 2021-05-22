/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function Spacer({
  children,
}) {
  return (
    <span style={{ marginLeft: '0.5em' }}>
      {children}
    </span>
  );
}
