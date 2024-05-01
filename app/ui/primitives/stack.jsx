export function VStack({ children }, sx, ...rest) {
  return (
    <div className={`flex w-full flex-col gap-2 ${sx}`} {...rest}>
      {children}
    </div>
  );
}

export function HStack({ children }, sx, ...rest) {
  return (
    <div className={`flex w-full flex-col gap-2 md:flex-row ${sx}`} {...rest}>
      {children}
    </div>
  );
}
