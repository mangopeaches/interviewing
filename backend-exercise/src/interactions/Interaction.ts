/**
 * Base class for which all interactions should inherit from.
 * An interaction represents an individual process, i.e. create a user, update a user, etc.
 *
 * Goal: Build an interaction that solves the "sum of multiples" problem:
 * Takes three integer inputs: two numbers n and m, and a limit limit. The function should return the sum of all multiples of either n or m below the given limit.
 * Example:
 * Input:
 * n = 3
 * m = 5
 * limit = 10
 * Output:
 * The multiples of 3 below 10 are: 3, 6, 9
 * The multiples of 5 below 10 are: 5
 * The sum of the unique multiples of 3 and 5 below 10 is: 3 + 5 + 6 + 9 = 23
 * Return 23.
 *
 * Requirements:
 * The interaction solves the above "sum of multiples" problem, validating user input.
 * Write tests that validate the interaction validates and runs correctly.
 * Add a new route that calls the interaction to compute the outcome and output the answer.
 */
abstract class Interaction<RunReturnType> {
  /**
   * This method should validate the input matches the expectations.
   * @throws {Error} if the input is invalid.
   */
  abstract validate(): Promise<void>;

  /**
   * This method should do the actual business logic and return the result.
   * @throws {Error} if the interaction fails.
   */
  abstract run(): Promise<RunReturnType>;
}

export default Interaction;
