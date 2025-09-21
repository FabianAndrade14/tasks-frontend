type Props = {
  page: number;
  pages: number;
  onChange: (p: number) => void;
};

export default function Pagination({ page, pages, onChange }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
      <span>Page {page} / {pages}</span>
      <button disabled={page >= pages} onClick={() => onChange(page + 1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
    </div>
  );
}
