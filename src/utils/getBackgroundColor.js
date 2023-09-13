export function getBackgroundColor(index) {
  const num = index % 4;
  let color;

  switch (num) {
    case 0: {
      color = "bg-accent-1";
      break;
    }
    case 1: {
      color = "bg-accent-2";
      break;
    }
    case 2: {
      color = "bg-accent-3";
      break;
    }
    case 3: {
      color = "bg-accent-4";
      break;
    }
    default: {
      color = "bg-background-secondary";
      break;
    }
  }

  return color;
}
