import { useEffect, useRef } from "react";

export const useUpdateEffect = (
	callback: () => void | (() => void) | undefined,
	dependencies: unknown[]
) => {
	const isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		return callback();
	}, dependencies);
};
