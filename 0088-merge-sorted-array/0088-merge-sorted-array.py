class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        # idea 1 (using space)
        """
        i, j = 0, 0
        res = []
        for _ in range(m+n):
            if i == m:
                res.append(nums2[j])
                j+=1
            elif j == n:
                res.append(nums1[i])
                i+=1
            elif nums1[i] <= nums2[j]:
                res.append(nums1[i])
                i+=1
            else:
                res.append(nums2[j])
                j+=1
        for i in range(0,m+n):
            nums1[i] = res[i]
        
        return res
        """

        # idea 2 (work in reverse order)

        i, j = m-1,n-1
        for x in range(len(nums1)-1,-1,-1):
            if j>=0 and i>=0:
                if nums1[i] > nums2[j]:
                    nums1[x] = nums1[i]
                    i-=1
                else:
                    nums1[x] = nums2[j]
                    j-=1
            else:
                if j >=0:
                    nums1[x] = nums2[j]
                    j-=1
                else:
                    break
            


                