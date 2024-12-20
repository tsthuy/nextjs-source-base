import * as React from 'react';

import { Button } from '~/components/ui';

export default function Products() {
  const a = 1;
  return (
    <div>
      <Button className="text-red-500">Test shadcn</Button>
      <h1>hello am new from nextjs {a}</h1>
    </div>
  );
}
