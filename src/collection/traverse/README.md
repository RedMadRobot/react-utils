# traverse
Recursively changes every field name inside object with a new name recieved from `Formatter`

## Usage
```typescript
import {traverse, Formatter} from 'rmr-utils/collection/traverse';

const formatter: Formatter = (fieldName: string) => `new_${name}`;

traverse(object, formatter);
```