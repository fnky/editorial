/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler - User-supplied event handler
 * @param ourHandler - Library-supplied event handler
 */
export function wrapEvent<EventType extends React.SyntheticEvent | Event>(
  theirHandler: ((event: EventType) => unknown) | undefined,
  ourHandler: (event: EventType) => unknown,
): (event: EventType) => unknown {
  return (event) => {
    theirHandler?.(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}
