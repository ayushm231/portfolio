export const validateString = (value: unknown, maxLength: number): boolean => {
  // Check if value is a string
  if (typeof value === "string") {
    // If it's a string, check if its length is within maxLength
    return value.length <= maxLength;
  }
  // If value is not a string, return false
  return false;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message)
  } else if (typeof error === "string") {
    message = error
  } else {
    message = "Something went wrong"
  }

  return message
}
