export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div>© {year} Vardhman Pharma. Wholesale distributor of ethical medicines.</div>
        <div>Jabalpur, Madhya Pradesh, India</div>
      </div>
    </footer>
  );
}
